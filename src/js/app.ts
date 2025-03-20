/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
class App {
  /**
   * @type {HTMLCanvasElement}
   */
  #canvas: HTMLCanvasElement

  /**
   * @type {CanvasRenderingContext2D}
   */
  #context: CanvasRenderingContext2D

  /**
   * Constructor
   *
   * @param {number} width
   * @param {number} height
   * @param {number} radius
   */
  constructor(width: number = 200, height: number = 200, radius: number = 40) {
    this.#initCanvas(width, height)
    this.#draw(radius)
    this.#moveCanvas()
  }

  /**
   * Draw
   *
   * @param   {number} radius
   * @returns {void}
   * @todo    Improve how circles are drawn
   */
  #draw(radius: number): void {
    this.#drawCircle(radius, radius, radius)
    this.#drawCircle(this.#canvas.width - radius, radius, radius)
    this.#drawCircle(
      this.#canvas.width - radius,
      this.#canvas.height - radius,
      radius,
    )
    this.#drawCircle(radius, this.#canvas.height - radius, radius)
    this.#drawRect(radius)
  }

  /**
   * Draw rect
   *
   * @param   {number} radius
   * @returns {void}
   */
  #drawRect(radius: number): void {
    this.#context.clearRect(
      radius,
      radius,
      this.#canvas.width - radius * 2,
      this.#canvas.height - radius * 2,
    )
  }

  /**
   * Draw circle
   *
   * @param   {number} x
   * @param   {number} y
   * @param   {number} radius
   * @returns {void}
   */
  #drawCircle(x: number, y: number, radius: number): void {
    this.#context.fillStyle = '#000000'
    this.#context.beginPath()
    this.#context.arc(x, y, radius, 0, 2 * Math.PI)
    this.#context.fill()
  }

  /**
   * Move canvas
   *
   * @returns {void}
   */
  #moveCanvas(): void {
    window.addEventListener('pointermove', (e: PointerEvent) => {
      this.#canvas.style.top = `${e.clientY - this.#canvas.height / 2}px`
      this.#canvas.style.left = `${e.clientX - this.#canvas.width / 2}px`
    })
  }

  /**
   * Init canvas
   *
   * @param   {number} width
   * @param   {number} height
   * @returns {void}
   */
  #initCanvas(width: number, height: number): void {
    this.#canvas = document.createElement('canvas')
    this.#context = this.#canvas.getContext('2d') as CanvasRenderingContext2D

    this.#canvas.width = width
    this.#canvas.height = height
    this.#canvas.style.position = 'absolute'
    document.body.appendChild(this.#canvas)
  }
}
new App()
