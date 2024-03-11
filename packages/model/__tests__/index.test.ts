import {Model} from '../src'

describe('Model', () => {
	let instance = new Model()
	beforeEach(() => {
		instance = new Model()
	})

	it('instance should be an instanceof Model', () => expect(instance).toBeInstanceOf(Model))
	it('should have a property id', () => expect('id' in instance).toBeTruthy())
	it('should have a property data', () => expect(instance.data).toBeDefined())
	it('should have a property append', () => expect(instance.append).toBeDefined())
	it('should have a method get()', () => expect(typeof instance.get).toBe('function'))
	it('should have a method find()', () => expect(typeof instance.find).toBe('function'))
	it('should have a method findKey()', () => expect(typeof instance.findKey).toBe('function'))
	it('should have a method first()', () => expect(typeof instance.first).toBe('function'))
	it('should have a method last()', () => expect(typeof instance.last).toBe('function'))
	it('should have a method set()', () => expect(typeof instance.set).toBe('function'))
	it('should have a method has()', () => expect(typeof instance.has).toBe('function'))
	it('should have a method keys()', () => expect(typeof instance.keys).toBe('function'))
	it('should have a method count()', () => expect(typeof instance.count).toBe('function'))
	it('should have a method empty()', () => expect(typeof instance.empty).toBe('function'))
	it('should have a method coalesce()', () => expect(typeof instance.coalesce).toBe('function'))
	it('should have a method insert()', () => expect(typeof instance.insert).toBe('function'))
	it('should have a method push()', () => expect(typeof instance.push).toBe('function'))
	it('should have a method pull()', () => expect(typeof instance.pull).toBe('function'))
	it('should have a method patch()', () => expect(typeof instance.patch).toBe('function'))
	it('should have a method patch()', () => expect(typeof instance.patch).toBe('function'))
	it('should have a method increment()', () => expect(typeof instance.increment).toBe('function'))
	it('should have a method decrement()', () => expect(typeof instance.decrement).toBe('function'))
	it('should have a method ensureExists()', () => expect(typeof instance.ensureExists).toBe('function'))
	it('should have a method remove()', () => expect(typeof instance.remove).toBe('function'))
	it('should have a method validate()', () => expect(typeof instance.validate).toBe('function'))

	describe('Model.get()', () => {
		it('should return the expected value from get(a)', () => {
			instance.set('a', 1)
			expect(instance.get('a')).toBe(1)
		})

		it('should return the expected value from get(a.b)', () => {
			instance.set('a.b', 2)
			expect(instance.get('a.b')).toBe(2)
		})

		it('should return the expected value from get(a.b.c)', () => {
			instance.set('a.b.c', 3)
			expect(instance.get('a.b.c')).toBe(3)
		})

		it('should replace escaped periods with dashes', () => {
			instance.set('a\\.b', 4)
			expect(instance.toJSON()).toEqual({'a-b': 4})
		})

		it('should allow for escaped periods and dashes in get', () => {
			instance.set('a\\.b', 5)
			expect(instance.get('a\\.b')).toBe(5)
			expect(instance.get('a-b')).toBe(5)
		})
	})
})
