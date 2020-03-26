import {isAuthenticated} from '../../../middlewares';
import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Query: {
        seeFeed: async (_, args, {request}) => {
            isAuthenticated(request)
            const { user } = request
            const followings = await prisma.user({id: user.id}).followings();
            return prisma.posts({
                where: {
                    user:{
                        id_in: [...followings.map(user => user.id)]
                    }
                },
                orderBy: 'createdAt_DESC'
            })
        }
    }
}