import prisma from "../DB/db.config.js";



export const fetchComments = async(req,res)=>{
    const comments = await prisma.comment.findMany({
        include:{
            user:true,
            post:{
                include:{
                    user:true,
                }
            }
        }
    });
    return res.json({data:comments})
}

export const createComment =async(req,res)=>{
    try{
        const {user_id, post_id, comment} = req.body;
        await prisma.post.update({
            where:{
                id:Number(post_id)
            },
            data:{
                comment_count:{
                    increment:1,
                }
            }
        })

    const newComment = await prisma.comment.create({
        data:{
            user_id:Number(user_id),
            post_id:Number(post_id),
            comment,
        }
    })

    return res.json({data:newComment});
    }catch(err){
        consolelog(err);
    }
    

}

export const singleComment = async(req,res)=>{
    const comment_id = req.params.id;
    console.log("cid", comment_id)
    const findComment = await prisma.comment.findFirst({
        where:{
            id:comment_id,
        }
    })
    return res.json({data:findComment})
}

export const deleteComment = async(req,res)=>{
    const {comment_id} = req.params.id;
    const delComment = await prisma.comment.delete({
        where:{
            id:Number(comment_id)
        }
    })
    return res.json({data:delComment})
}