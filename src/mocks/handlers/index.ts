import loginHandlers from './login';
import formsHandlers from './forms';
import orderHandlers from './orders';

const handlers = [...loginHandlers, ...formsHandlers, ...orderHandlers];

export default handlers;
