      fetch("https://69476f1bca6715d122fa392c.mockapi.io/api/v1/products", {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          // handle error
        })
        .then((tasks) => {
            console.log(tasks)
            for (let i = 0; i < tasks.length;i++) {
                console.log(tasks[i].name);
            }
          // Do something with the list of tasks
        })
        .catch((error) => {
            console.error(error)
          // handle error
        });