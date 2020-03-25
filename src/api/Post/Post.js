import {prisma} from '../../../hello-world/generated/prisma-client';

export default {
    Post: {
        isLiked: async (parent, _, {request}) => {
            const {user} = request;
            const {id} = parent;

            return prisma.$exists.like({
                AND: [
                    {user: {id: user.id}}, {post: {id}},
                ],
            });
        },
        likeCount: async (parent, _) => {
            const {id} = parent;
            return prisma.likesConnection({
                where: {post: {id}},
            }).aggregate().count();
        },
        commentCount: parent =>
            prisma.commentsConnection({
                where: {post: {id: parent.id}},
            }).aggregate().count(),
        files: ({id}) => prisma.post({id}).files(),
        comments: ({id}) => prisma.post({id}).comments(),
        user: ({id}) => prisma.post({id}).user(),
        likes: ({id}) => prisma.post({id}).likes(),
    },
};