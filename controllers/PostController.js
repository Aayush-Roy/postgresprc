import prisma from "../DB/db.config.js";

export const getAllPost =async(req,res)=>{
    const posts = await prisma.post.findMany({
        include:{
            comment:{
                include:{
                    user:true
                }
            }
        },
        // where:{
        //     comment_count:{
        //         gt:0,
        //     }
        // }
        where:{
            title:{
                startsWith:"Next",
            }
        }
    });
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
// export const showPost = async(req,res)=>{
//     const postId = req.params.id;
//     const post = await prisma.post.findFirst({
//         where:{
//             id:Number(postId),
//         },
//         include:{
//             comment:{
//                 user:true
//             }
//         }
//     })
//     return res.json({data:post})
// }
export const showPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await prisma.post.findFirst({
      where: {
        id: Number(postId), // remove Number if UUID
      },
      include: {
        comment: {
          include: {
            user: true,
          },
        },
      },
    });

    return res.json({ data: post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

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