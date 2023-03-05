<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col>
        <!-- text-fieldの入力内容を変数"todoInput"に入れる -->
        <!-- 入れた内容が{{ todoInput }}に出てくるようにする -->
        <v-text-field label="TODO" hint="入力してEnterキー" v-model="todoInput" clearable @keydown.enter="add"></v-text-field>
        {{ todoInput }}
      </v-col>
      <v-col>
        <v-btn fab @click="del"><v-icon>mdi-delete-variant</v-icon></v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-card>
          <v-list dense>
            <v-list-item-group>
              <!-- ループ処理 itemが増えるとリストが増える -->
              <!-- todos(配列)から1件ずつtodoを取り出して、中身を構成していく -->
              <!-- key:1つ1つの要素を1件ずつ特定する「todo1件のタイトル」という項目を1つのkeyにする(情報を特定するためのkey) -->
              <v-list-item v-for="todo in todos" :key="todo.title">
                <!-- 取り出したtodo情報からtitleという項目を取り出して表示する -->
                <!-- label属性の前に:を付けるとtodo.の後ろの変数を使える(:がなければ、文字todo.が表示される) -->
                <!-- :をつけてtodo.tsファイルのTodoのタイトル項目を取り出す -->
                <v-checkbox :label="todo.title" v-model="todo.done" v-bind:class="{done:todo.done}"></v-checkbox>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Todo } from '@/models/todo'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import HelloWorld from '../components/HelloWorld.vue'

@Component({ components: { HelloWorld } })
export default class HomeView extends Vue {
  todos: Todo[] = []
  todoInput = ''

  // mounted () {
  // this：このクラスの実際に使う時の情報（インスタンス）のオブジェクトのtodosという場所にあるメソッドを使おうとしている
  // push：配列に情報を入れる
  // this.todos.push(new Todo('ジャージャー麺食べたい'))
  // this.todos.push(new Todo('餃子麺食べたい'))

  add () {
    // console.log('エンターキー')
    this.todos.push(new Todo(this.todoInput))
    this.todoInput = ''
  }

  del () {
    // console.log('deldeldel')
    // filterという機能を使ってitemの状態がfalseのものだけを取ってくる→配列に上書き
    this.todos = this.todos.filter(item => item.done === false)
  }
}
</script>
<style lang="sass">
.done
  text-decoration: line-through
</style>
