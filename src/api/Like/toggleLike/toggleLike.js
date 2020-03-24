import {isAuthenticated} from '../../../middlewares';
import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Mutation: {
        toggleLike: async (_, args, {request}) => {
            isAuthenticated(request);
            const {postId} = args;
            const {user} = request;
            const filterOptions = {
                AND: [
                    {
                        user: {
                            id: user.id,
                        },
                    },
                    {
                        post: {
                            id: postId,
                        },
                    },
                ],
            };
            try{
                const existingLike = await prisma.$exists.like(filterOptions);

                if (existingLike) {
                    await prisma.deleteManyLikes(filterOptions)
                } else {
                    const newLike = await prisma.createLike({
                        user: {
                            connect: {
                                id: user.id,
                            },
                        },
                        post: {
                            connect: {
                                id: postId
                            }
                        }
                    });
                }
                return true;
            }catch (e) {
                return false;
            }
        },
    },
};