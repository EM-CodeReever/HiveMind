import type { RequestHandler } from './$types';
import type { RegisterForm } from '$lib/types';
import { PUBLIC_SUPABASE_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(10);
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY)

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const GET: RequestHandler = async () => {
    return new Response();
};

export const POST: RequestHandler = async ({request}) => {
    try{
        const form: RegisterForm = await request.json();
        console.log(form);
        let emailCheck  = await prisma.users.findFirst({
            where: {
                email: form.email
            }
        })
        if(emailCheck){
            return new Response(JSON.stringify({
                state: false,
                message: 'Email already exists'
            }));
            // TO DO: Add more checks; had an idea to create a temp table of person that is registering and then delete it after 24 hours if they don't complete the registration process
        }else{
            const hash = bcrypt.hashSync(form.password, salt);
            let { data, error } = await supabase.auth.signUp({
                email: form.email,
                password: hash
            })
            if(error){
                console.log(error);
                return new Response(JSON.stringify({
                    state: false,
                    message: 'An unknown error occured'
                    //ain't a good idea to send the actual error message to the client
                }));
            }else{
                console.log(data);
                return new Response(JSON.stringify({
                    state: true,
                    message: 'success'
                }));
            }
            //after this we can stor the users profile data in the temp table and then send them an email with a link to complete the registration process
        }
    }catch(e: any){
        return new Response(JSON.stringify({
            state: false,
            message: 'Form Error: ' + e.message
        }));
        
    }
    
}