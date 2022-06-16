class StorageWrapper {
	private storage?: Storage;

	constructor() {
		try {
			this.storage = window.localStorage; // session
		} catch (error) {
			console.error(error);
		}
	}

	get length() {
		if (!this.storage) return;
		return this.storage.length;
	}

	get<T>(key: string) {
		if (!this.storage) return;

		try {
			const value = this.storage.getItem(key);
			if (value === null) return;
			return JSON.parse(value) as T;
		} catch (error) {
			console.error(error);
		}
	}

	set(key: string, value: unknown) {
		if (!this.storage) return;

		try {
			const stringValue = JSON.stringify(value);
			this.storage.setItem(key, stringValue);
		} catch (error) {
			console.error(error);
		}
	}

	remove(key: string) {
		if (!this.storage) return;
		this.storage.removeItem(key);
	}

	clear() {
		if (!this.storage) return;
		this.storage.clear();
	}
}

export const storageWrapper = new StorageWrapper();
