import {isAuthenticated} from '../../../middlewares';
import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Mutation: {
        editPost: async (_, args, {request}) => {
            isAuthenticated(request);
            const {id, caption, location} = args;

            try {
                await prisma.updatePost({
                    where: {
                       id
                    },
                    data: {
                        caption,
                        location,
                    }
                });

                return true;
            } catch (e) {
                return false;
            }
        },

    },
};