export class Todo {
  // :labelのtodo.titleから呼ばれる部分
  title: string
  // 終わったか終わってないかのフィールド
  done = false
  constructor (title: string) {
    this.title = title
  }
}
