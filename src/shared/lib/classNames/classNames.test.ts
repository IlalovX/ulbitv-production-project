import { classNames } from './classNames'

describe('className', () => {
	test('with only first param', () => {
		expect(classNames('someClass')).toBe('someClass')
	})

	test('with additional class', () => {
		const expected = 'someClass classTest1 classTest2'
		expect(classNames('someClass', {}, ['classTest1', 'classTest2'])).toBe(
			expected
		)
	})

	test('with mods', () => {
		const expected = 'someClass classTest1 classTest2 hovered scrollable'
		expect(
			classNames('someClass', { hovered: true, scrollable: true }, [
				'classTest1',
				'classTest2',
			])
		).toBe(expected)
	})

	test('with mods false', () => {
		const expected = 'someClass classTest1 classTest2 hovered'
		expect(
			classNames('someClass', { hovered: true, scrollable: false }, [
				'classTest1',
				'classTest2',
			])
		).toBe(expected)
	})

	test('with mods undefined', () => {
		const expected = 'someClass classTest1 classTest2 hovered'
		expect(
			classNames('someClass', { hovered: true, scrollable: undefined }, [
				'classTest1',
				'classTest2',
			])
		).toBe(expected)
	})
})
