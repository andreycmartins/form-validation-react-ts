import { DateTimePicker, Nav, RichInput } from "../components"
import { Button } from "../components/Button"

export function WriteNowPage() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1>Escrever Agora</h1>

        <form className="form">
          <label htmlFor="destinationName">Nome completo</label>
          <input type="text" />
          <label htmlFor="destinationAdress">E-mail</label>
          <input type="email" />
          <label htmlFor="dueData">Data</label>
          <DateTimePicker />
          <label htmlFor="subject">Assunto</label>
          <input type="text" />
          <label htmlFor="body">Mensagem</label>
          <RichInput/>
          <Button type="submit" variant="primary">Enviar</Button>
        </form>
      </div>
    </>
  )
}
