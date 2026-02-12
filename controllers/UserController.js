import prisma from "../DB/db.config.js";




export const createUser = async(req,res)=>{
    const {name,email,password} = req.body;
    const findUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    });
    if(findUser) return res.json({status:400, message:"Email Already taken"});
    const newUser = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })

    return res.json({status:200,data:newUser})
}

export const updateUser=async(req,res)=>{
    const userId = req.params.id;
    const{name,email,password} = req.body;
    await prisma.user.update({
        where:{
            id:Number(userId)
        },
        data:{
            name,
            email,
            password
        }
    })
    return res.json({status:200, message:"User updated successfully"})
}

export const fetchUsers = async(req,res)=>{
    const users = await prisma.user.findMany({
        include:{
            // post:true
            // post:{
            //     select:{
            //         title:true,
            //         comment_count:true,
            //     }
            // }
            
        }
        // select:{
        //         _count:{
        //             select:{
        //                 comments:true
        //             }
        //         }
        //     }
    });
    return res.json({users});
}

export const singleUser = async(req,res)=>{
    const userId = req.params.id;
    const user = await prisma.user.findFirst({
        where:{
            id:Number(userId)
        }
    })
    return res.json(user)
}

export const deleteUser = async(req,res)=>{
    const userId = req.params.id;
    const user = await prisma.user.delete({
        where:{
            id:Number(userId),
        }
    })

    return res.status(200).json({message:"user deleted"})
} 