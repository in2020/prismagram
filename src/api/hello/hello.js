import {prisma} from '../../../hello-world/generated/prisma-client';

export default {
    Query: {
        hello: async () => {
            console.log(await prisma.users());
            return "Hello!!";
        }
    }
}