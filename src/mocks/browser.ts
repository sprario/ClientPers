import { setupWorker, SetupWorkerApi } from 'msw'
import handlers from './handlers'

export const worker: SetupWorkerApi = setupWorker(...handlers)

export const initMSW = async () => {
	// if (NODE_ENV === 'development') {
	// 	await worker.start({
	// 		onUnhandledRequest: 'bypass',
	// 	})
	// }
    await worker.start({
        onUnhandledRequest: 'bypass',
    })
}
