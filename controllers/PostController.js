import prisma from "../DB/db.config.js";

export const getAllPost =async(req,res)=>{
    const posts = await prisma.post.findMany({});
    return res.json({posts});
}

export const createPost = async(req,res)=>{
    try{
         const {user_id,title,description} = req.body;
    const newPost = await prisma.post.create({
        data:{
            user_id:Number(user_id),
            title,
            description
        },
    })
    return res.json({data:newPost})
    }catch(err){
        console.log(err);
    }
   
}
// export const createPost = async (req, res) => {
//   try {
//     const { user_id, title, description } = req.body;

//     const newPost = await prisma.post.create({
//       data: {
//         user_id: Number(user_id),
//         title,
//         description,
//       },
//     });

//     return res.json({ data: newPost });
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };
export const showPost = async(req,res)=>{
    const postId = req.params.id;
    const post = await prisma.post.findFirst({
        where:{
            id:Number(postId)
        }
    })
    return res.json({data:post})
}

export const updatePost = async(req,res)=>{
    const postId = req.params.id;
    const{user_id,title,description} = req.body;
    const updatedPost = await prisma.post.update({
        where:{
            id:postId,
            title,
            description
        }
    })
    return res.json({data:updatePost})
}

export const deletePost =async(req,res)=>{
    const postId=req.params.id;
    const delPost = await prisma.post.delete({
        where:{
            id:Number(postId),
        }
    })
    return res.json({msg:"post deleted!"});
}