new Vue({
      el: '#app',
      data: {
          newTask: '',
          tasks: [],
      },
      methods: {
          addTask() {
              if (this.newTask.trim() !== '') {
                  this.tasks.push(this.newTask.trim());
                  this.saveTasks();
                  this.newTask = '';
              }
          },
          removeTask(index) {
              this.tasks.splice(index, 1);
              this.saveTasks();
          },
          saveTasks() {
              axios.post('api.php', { tasks: this.tasks })
                  .then(response => console.log(response.data))
                  .catch(error => console.error(error));
          },
      },
      mounted() {
          axios.get('api.php')
              .then(response => this.tasks = response.data.tasks)
              .catch(error => console.error(error));
      },
});