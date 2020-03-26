import {prisma} from '../../../hello-world/generated/prisma-client';

export default {
    Message: {
        from: ({id}) => prisma.message({id}).from(),
        to: ({id}) => prisma.message({id}).to(),
        room: ({id}) => prisma.message({id}).room(),
    },
};