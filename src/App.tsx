import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormSection,
  Input,
  SubmitForm,
} from "./components/reuseableForm";
import Container from "./components/ui/Container";
import { z } from "zod";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TestSchema>;
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <Input
            type="email"
            register={register("email")}
            errors={errors}
            label="Email"
          />
        </FormSection>
        <SubmitForm></SubmitForm>
      </Form>
    </Container>
  );
}

export default App;
