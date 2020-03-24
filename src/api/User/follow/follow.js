import {isAuthenticated} from '../../../middlewares';
import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Mutation: {
        follow: async (_, args, {request}) => {
            isAuthenticated(request);
            const {id} = args;
            const {user} = request;

            try {
                await prisma.updateUser({
                    where: {
                        id: user.id
                    },
                    data: {
                        followings: {
                            connect:{
                                id
                            }
                        }
                    }
                });
                return true;
            }catch (e) {
                return false;
            }
        },
    },
};