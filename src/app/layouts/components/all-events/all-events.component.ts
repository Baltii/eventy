import { Component } from '@angular/core';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss'],
})
export class AllEventsComponent {
  events = [
    {
      title: 'Hackathon 2024',
      date: this.getCurrentDate(),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in feugiat nunc. Suspendisse aliquet, odio ut tincidunt convallis, neque purus euismod tellus, ut venenatis risus leo sed urna. Vivamus non viverra odio, vel auctor velit. Nam ut mauris maximus, rutrum eros eget, blandit ligula. Etiam tincidunt, libero sed sollicitudin faucibus, odio diam pretium lectus, in faucibus nisl odio at odio. Suspendisse potenti. Vestibulum nec sodales mi. Suspendisse at semper sapien. Fusce in felis quis sapien pellentesque accumsan a in purus. In feugiat tempus pretium. Etiam hendrerit dui ut nulla molestie, quis tincidunt neque faucibus. Praesent bibendum ex rhoncus diam vehicula vulputate. Aliquam massa sapien, efficitur ut ullamcorper semper, viverra quis sem. Vestibulum in faucibus neque.',
      image:
        'https://cdn.socio.events/spai/q_glossy+w_966+to_avif+ret_img/socio.events/wp-content/uploads/2022/10/AdobeStock_503243650-2048x1184.jpeg',
    },
    {
      title: 'Hackathon 2024',
      date: this.getCurrentDate(),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in feugiat nunc. Suspendisse aliquet, odio ut tincidunt convallis, neque purus euismod tellus, ut venenatis risus leo sed urna. Vivamus non viverra odio, vel auctor velit. Nam ut mauris maximus, rutrum eros eget, blandit ligula. Etiam tincidunt, libero sed sollicitudin faucibus, odio diam pretium lectus, in faucibus nisl odio at odio. Suspendisse potenti. Vestibulum nec sodales mi. Suspendisse at semper sapien. Fusce in felis quis sapien pellentesque accumsan a in purus. In feugiat tempus pretium. Etiam hendrerit dui ut nulla molestie, quis tincidunt neque faucibus. Praesent bibendum ex rhoncus diam vehicula vulputate. Aliquam massa sapien, efficitur ut ullamcorper semper, viverra quis sem. Vestibulum in faucibus neque.',
      image:
        'https://cdn.socio.events/spai/q_glossy+w_966+to_avif+ret_img/socio.events/wp-content/uploads/2022/10/AdobeStock_503243650-2048x1184.jpeg',
    },
    {
      title: 'Hackathon 2024',
      date: this.getCurrentDate(),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in feugiat nunc. Suspendisse aliquet, odio ut tincidunt convallis, neque purus euismod tellus, ut venenatis risus leo sed urna. Vivamus non viverra odio, vel auctor velit. Nam ut mauris maximus, rutrum eros eget, blandit ligula. Etiam tincidunt, libero sed sollicitudin faucibus, odio diam pretium lectus, in faucibus nisl odio at odio. Suspendisse potenti. Vestibulum nec sodales mi. Suspendisse at semper sapien. Fusce in felis quis sapien pellentesque accumsan a in purus. In feugiat tempus pretium. Etiam hendrerit dui ut nulla molestie, quis tincidunt neque faucibus. Praesent bibendum ex rhoncus diam vehicula vulputate. Aliquam massa sapien, efficitur ut ullamcorper semper, viverra quis sem. Vestibulum in faucibus neque.',
      image:
        'https://cdn.socio.events/spai/q_glossy+w_966+to_avif+ret_img/socio.events/wp-content/uploads/2022/10/AdobeStock_503243650-2048x1184.jpeg',
    },
    {
      title: 'Hackathon 2024',
      date: this.getCurrentDate(),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in feugiat nunc. Suspendisse aliquet, odio ut tincidunt convallis, neque purus euismod tellus, ut venenatis risus leo sed urna. Vivamus non viverra odio, vel auctor velit. Nam ut mauris maximus, rutrum eros eget, blandit ligula. Etiam tincidunt, libero sed sollicitudin faucibus, odio diam pretium lectus, in faucibus nisl odio at odio. Suspendisse potenti. Vestibulum nec sodales mi. Suspendisse at semper sapien. Fusce in felis quis sapien pellentesque accumsan a in purus. In feugiat tempus pretium. Etiam hendrerit dui ut nulla molestie, quis tincidunt neque faucibus. Praesent bibendum ex rhoncus diam vehicula vulputate. Aliquam massa sapien, efficitur ut ullamcorper semper, viverra quis sem. Vestibulum in faucibus neque.',
      image:
        'https://cdn.socio.events/spai/q_glossy+w_966+to_avif+ret_img/socio.events/wp-content/uploads/2022/10/AdobeStock_503243650-2048x1184.jpeg',
    },
    {
      title: 'Hackathon 2024',
      date: this.getCurrentDate(),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in feugiat nunc. Suspendisse aliquet, odio ut tincidunt convallis, neque purus euismod tellus, ut venenatis risus leo sed urna. Vivamus non viverra odio, vel auctor velit. Nam ut mauris maximus, rutrum eros eget, blandit ligula. Etiam tincidunt, libero sed sollicitudin faucibus, odio diam pretium lectus, in faucibus nisl odio at odio. Suspendisse potenti. Vestibulum nec sodales mi. Suspendisse at semper sapien. Fusce in felis quis sapien pellentesque accumsan a in purus. In feugiat tempus pretium. Etiam hendrerit dui ut nulla molestie, quis tincidunt neque faucibus. Praesent bibendum ex rhoncus diam vehicula vulputate. Aliquam massa sapien, efficitur ut ullamcorper semper, viverra quis sem. Vestibulum in faucibus neque.',
      image:
        'https://cdn.socio.events/spai/q_glossy+w_966+to_avif+ret_img/socio.events/wp-content/uploads/2022/10/AdobeStock_503243650-2048x1184.jpeg',
    },
  ];

  getCurrentDate() {
    let currentDate = new Date();

    // Get individual components of the date
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    let day = currentDate.getDate();

    // Format the date as a string (e.g., "YYYY-MM-DD")
    let formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
    return formattedDate;
  }
}
