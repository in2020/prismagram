import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Query:{
        seeUser: (_, args) => prisma.user({id: args.id})
    }
}