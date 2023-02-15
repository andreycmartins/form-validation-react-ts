import { FormProvider, useForm } from "react-hook-form"
import { DateTimePicker, Nav, RichInput } from "../components"
import { Button } from "../components/Button"
import { IWriteNowForm } from "../components/interfaces"
import { WriteNowResolver } from "../components/validations"

export function WriteNowPage() {
  const formMethods = useForm<IWriteNowForm>({ resolver: WriteNowResolver })
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = formMethods

  function onSubmit(values: any) {
    console.log("asd", values)
  }

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Escrever Agora</h1>
        <FormProvider {...formMethods}>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="destinationName">Nome completo</label>
            <input {...register("destinationName")} type="text" />
            {errors?.destinationName?.message && (
              <p className="error-text">{errors?.destinationName?.message}</p>
            )}

            <label htmlFor="destinationAdress">E-mail</label>
            <input {...register("destinationAdress")} type="email" />
            {errors?.destinationAdress?.message && (
              <p className="error-text">{errors?.destinationAdress?.message}</p>
            )}

            <label htmlFor="dueData">Data</label>
            <DateTimePicker name="dueDate" />
            {errors?.dueDate?.message && <p className="error-text">{errors?.dueDate?.message}</p>}

            <label htmlFor="subject">Assunto</label>
            <input {...register("subject")} type="text" />
            {errors?.subject?.message && <p className="error-text">{errors?.subject?.message}</p>}

            <label htmlFor="body">Mensagem</label>
            <RichInput name="body" />
            {errors?.body?.message && <p className="error-text">{errors?.body?.message}</p>}
            <Button type="submit" variant="primary">
              Enviar
            </Button>
          </form>
        </FormProvider>
      </div>
    </>
  )
}
