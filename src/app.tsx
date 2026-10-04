import './app.css'
import { Button, DatePicker } from "antd";

export function App() {

  return (
    <>
      <section id="center">
      	<Button type='primary'>Test</Button>
        <DatePicker placeholder="select date" />
      </section>

      <div class="ticks"></div>
    </>
  )
}
