import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Control, FieldValues, Path } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password';
  delay?: number;
}

export function FormFieldWithMotion<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  delay = 0.5,
}: FormFieldProps<T>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-gray-200'>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                type={type}
                {...field}
                className='border-white/20 bg-white/10 text-white placeholder-gray-400 focus:border-white/40'
              />
            </FormControl>
            <FormMessage className='text-red-300' />
          </FormItem>
        )}
      />
    </motion.div>
  );
}

// Convenience functions for common use cases
export function EmailFormField<T extends FieldValues>({
  control,
}: {
  control: Control<T>;
}) {
  return (
    <FormFieldWithMotion
      control={control}
      name={'email' as Path<T>}
      label='Email'
      placeholder='admin@example.com'
      type='email'
    />
  );
}

export function PasswordFormField<T extends FieldValues>({
  control,
}: {
  control: Control<T>;
}) {
  return (
    <FormFieldWithMotion
      control={control}
      name={'password' as Path<T>}
      label='Password'
      placeholder='••••••••'
      type='password'
      delay={0.6}
    />
  );
}
