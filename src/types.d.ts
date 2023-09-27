

export interface UserType {
    name: string;
    email: string;
    phone: string;
    plan:{
        monthly: string;
        yearly: string;
    };
    addons:{
        onlineServices: boolean;
        largerStorage: boolean;
        customizableProfile:boolean;
    };
    id: string;
}