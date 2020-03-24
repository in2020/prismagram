import {isAuthenticated} from '../../../middlewares';
import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Query: {
        me: (_, args, {request}) => {
            isAuthenticated(request)
            const {user} = request;
            return prisma.user({id: user.id})
        }
    }
}