import {isAuthenticated} from '../../../middlewares';
import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Query: {
        seeRooms: async (_, args, {request}) => {
            isAuthenticated(request);
            const {user} = request;
            return prisma.rooms({
                where: {
                    participants_some: {
                        id: user.id
                    },
                },
            });
        },
    },
};