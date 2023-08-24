export const useValidateFormData = () => {
    
    const validate = formData => {
        if(Object.values(formData).some(v => !v))
            return false;

        return true;
    }

    return {
        validate
    }
    
}