import {isAuthenticated} from '../../../middlewares';
import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Query :{
        seeRoom: async (_, args, {request}) => {
            isAuthenticated(request)
            const { user } = request;
            const { id } = args;
            const canSee = await prisma.$exists.room({
                AND: [
                    {participants_some: {id: user.id}},
                    {id}
                ]

            })
            console.log(user.id)
            if(canSee){
                return prisma.room({id});
            }else{
                throw Error("You can't see this!")
            }
        }
    }
}