

export class ObjectManipulator<T> {

    constructor(protected obj: T) {}

    public set<K extends string, V>(key: K, value: V): ObjectManipulator<Omit<T, K> & { [P in K]: V }> {
        // Remove the key if it exists, then add the new key-value
        const { [key]: _, ...rest } = this.obj as any;
        return new ObjectManipulator({ ...rest, [key]: value }) as any;
    }

    public get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K) : ObjectManipulator<Omit<T, K>>{
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}
