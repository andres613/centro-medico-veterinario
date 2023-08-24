export const useSerializeFormData = () => {
    
    const serialize = form => {
        const data = getFromData(form);
        return getSerializedFormData(data);
    }

    const getFromData = _ => {
        return new FormData(_);
    }

    const getSerializedFormData = _ => {
        const serializedFormData = {};
        
        for (let [name, value] of _) {
            serializedFormData[name] = value;
        }

        return serializedFormData;
    }

    return {
        serialize
    }
    
}