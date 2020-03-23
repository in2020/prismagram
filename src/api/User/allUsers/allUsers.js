import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Query: {
        allUsers: () => prisma.users()
    }
}