
import { z } from "zod";

//  === sign_In ==
export const sign_In = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Invalid email address",
    }),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});



//  === sign_Up ===
export const register =z.object({
    name: z.string().nonempty("Full Name is required"),
 email: z
    .string()
    .nonempty("Email is required")
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Invalid email address",
    }),
 password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    password_confirmation: z
      .string()
      .nonempty("Confirm Password is required")
      .min(6, "Password must be at least 6 characters long"),
      role : z.string().optional(),
  })
  .refine((value) => value.password === value.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords must be match.",
  });




export const varify_sc = z.object({
  code: z.string().nonempty("Code is required"),
});

export const new_Pass = z
  .object({
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    c_password: z
      .string()
      .nonempty("Confirm Password is required")
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine((value) => value.password === value.c_password, {
    path: ["c_password"],
    message: "Passwords must be match.",
  });

export const new_addOn = z.object({
  name: z.string().nonempty("Add-on name is required"),
});

//  === change_pass ===
export const change_Pass = z
  .object({
    current_password: z.string().nonempty("Current Password is required"),
    new_password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    c_password: z
      .string()
      .nonempty("Confirm Password is required")
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine((value) => value.new_password === value.c_password, {
    path: ["c_password"],
    message: "Passwords must be match.",
  });

export const contact_us = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required"),
  message: z.string().nonempty("Message is required"),
});

export const booking_screma = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required"),
  phone_number: z.string().nonempty("Phone number is required"),
  address: z.string().nonempty("Address is required"),
  message: z.string().optional(),
});
export const account_screma = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required"),
  phone_number: z.string().nonempty("Phone number is required"),
  address: z.string().nonempty("Address is required"),
  image: z.string().nonempty("Image is required"),
});
export const new_addPaymentCard = z.object({
  name: z.string().nonempty("Name is required"),
});
export const new_review = z.object({
  message: z.string().nonempty("Message is required"),
});
export const new_delivery_request = z.object({
  name: z.string().nonempty("Message is required"),
});

export const package_store = z.object({
  title: z.string().nonempty("Title is required"),
  price: z.string().nonempty("Price is required"),
  about: z.string().nonempty("About is required"),
  image: z.any().refine((file) => file instanceof File, {
    message: "Image is required",
  }),
  services: z.array(z.string()).nonempty("Services is required"),
});

export const set_store = z.object({
  title: z.string().nonempty("Title is required"),
  price: z.string().nonempty("Price is required"),
  about: z.string().nonempty("About is required"),
  date: z.iso.date().nonempty("Date is required"),
});


export const custom_quote_req = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required"),
  phone_number: z.string().nonempty("Phone number is required"),
  message: z.string().nonempty("Document request message is required"),
});

export const billing_sc = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required"),
  phone_number: z.string().nonempty("Phone number is required"),
  address: z.string().nonempty("Document request message is required"),
});


export const order_mn_sc = z.object({
  category_name: z.string().nonempty("Category Name is required"),
  service_name: z.string().nonempty("Service Name is required"),
  question_one: z.string().optional(),
  question_two: z.string().optional(),
  question_three: z.string().optional(), 
  price: z.string().nonempty("Price  is required"),
  delivery_status_message: z.string().nonempty("Delivery message is required"),
});

export const create_news_sc = z.object({
  image: z.string().nonempty("Image is required"), 
  title: z.string().nonempty("Title is required"), 
  news_description: z.string().nonempty("News description is required"), 
});

export const admin_profile_sc = z.object({
 full_name: z.string().nonempty("Full Name is required"),
  phone_number: z.string().nonempty("Phone number is required"),
  address: z.string().nonempty("Location is required"),
});
export const add_categorie_sc = z.object({
 categorie_name: z.string().nonempty("Categorie Name is required"),
});
export const add_service_first_step_sc = z.object({
 title: z.string().nonempty("Title is required"), 
sub_title: z.string().nonempty("Sub Title is required"),
  price: z.string().nonempty("Price  is required"),
   orderType: z.array(z.string()).optional(),
});
export const add_service_second_step_include_sc = z.object({
 service_type: z.string().nonempty("Service Type is required"), 
details: z.string().nonempty("Details is required"),
  price: z.string().nonempty("Price  is required"),
});
export const add_service_second_step_processing_time_sc = z.object({
details: z.string().nonempty("Details is required"),
  time: z.string().nonempty("Time  is required"),
});

export const add_service_three_step_delivery_details_sc = z.object({
 delivery_type: z.string().nonempty("Delivery Type is required"), 
details: z.string().nonempty("Details is required"),
  price: z.string().nonempty("Price  is required"),
});
export const add_service_three_step_redquire_dc_sc = z.object({
 title: z.string().optional(), 
});
export const add_service_three_step_add_question_sc = z.object({
 question_name: z.string().optional(), 
 drop_down_value: z.string().optional(), 
   orderType: z.array(z.string()).optional(),
});