import {prisma} from '../../../hello-world/generated/prisma-client';

export default {
    User: {
        fullName: parent => {
            return `${parent.firstName} ${parent.lastName}`
        },
        isFollowing: async (parent, _, { request }) => {
            const { user } = request;
            const { id: parentId } = parent;
            try {
                return prisma.$exists.user({
                    AND: [
                        {
                            id: user.id
                        },
                        {
                            followings_some: {
                                id: parentId
                            }
                        }
                    ]
                });
            } catch {
                return false;
            }
        },
        isSelf: async (parent, _, { request }) => {
            const { user } = request;
            const { id: parentId} = parent;
            return user === undefined ? false : user.id === parentId;
        }
    }
}