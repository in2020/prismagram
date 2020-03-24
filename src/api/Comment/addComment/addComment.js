import {isAuthenticated} from '../../../middlewares';
import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Mutation: {
        addComment: async (_, args, {request}) => {
            isAuthenticated(request)
            const {postId, text} = args;
            const {user} = request;

            return prisma.createComment({
                user: {
                    connect: {
                        id: user.id
                    }
                },
                post: {
                    connect: {
                        id: postId
                    }
                },
                text
            });
        }
    }
}