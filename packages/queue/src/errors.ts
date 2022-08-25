export interface QueueErrorJSON {
	name: string
	message: string
	data?: any
	errors?: any
}

export type DynamicError = Error & Record<string, any>
export type ErrorMessage = any[] | DynamicError | Record<string, any> | string

interface ErrorProperties extends Omit<QueueErrorJSON, 'message'> {
	type: string
}

/**
 * @noInheritDoc
 */
export class QueueError extends Error {
	readonly type: string

	readonly data: any

	readonly errors: any

	readonly spread = false

	constructor(error: ErrorMessage, name: string, _data: any) {
		let msg = typeof error === 'string' ? error : 'Error'
		const properties: ErrorProperties = {
			name,
			type: 'QueueError'
		}

		if (Array.isArray(_data)) {
			properties.data = _data
		} else if (typeof error === 'object' || _data !== undefined) {
			const {message, errors, ...rest} = typeof error === 'object' ? error : _data

			msg = message || msg
			properties.errors = errors
			properties.data = rest
		}

		super(msg)
		Object.assign(this, properties)
	}

	toJSON() {
		let result: QueueErrorJSON = {
			name: this.name,
			message: this.message
		}

		if (this.data !== undefined) {
			if (this.spread) {
				result = {
					...result,
					...this.data
				}
			} else {
				result.data = this.data
			}
		}

		if (this.errors !== undefined) {
			result.errors = this.errors
		}

		return result
	}
}

/**
 * @noInheritDoc
 */
export class QueueException extends QueueError {
	constructor(message?: ErrorMessage, data?: any) {
		super(message || 'An exception has occurred', 'QueueException', data)
	}
}

/**
 * @noInheritDoc
 */
export class AbortQueueError extends QueueError {
	constructor(message?: ErrorMessage, data?: any) {
		super(message || 'The queue has been aborted', 'AbortQueueError', data)
	}
}
