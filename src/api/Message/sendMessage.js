import {isAuthenticated} from '../../middlewares';
import {prisma} from '../../../hello-world/generated/prisma-client';

export default {
    Mutation: {
        sendMessage: async (_, args, {request}) => {
            isAuthenticated(request);
            const {user} = request;
            const {text, roomId, to} = args;
            let room;

            if (roomId === undefined) {
                room = await prisma.createRoom({
                    participants: {
                        connect: [{id: to}, {id: user.id}]
                    }
                });
            } else {
                room = await prisma.room({id: roomId});
            }

            return await prisma.createMessage({
                text,
                from: {
                    connect: {id: user.id}
                },
                to: {
                    connect: {id: to}
                },
                root: {
                    connect: {id: room.id}
                }
            });

        },
    },
};