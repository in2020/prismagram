import {isAuthenticated} from '../../../middlewares';
import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Mutation: {
        unfollow: async (_, args, { request }) => {
            isAuthenticated(request)
            const {id} = args;
            const {user} = request

            try {
                await prisma.updateUser({
                    where: {
                        id: user.id
                    },
                    data: {
                        followings: {
                            disconnect:{
                                id
                            }
                        }
                    }
                })
                return true;
            } catch (e) {
                return false;
            }
        }
    }
}