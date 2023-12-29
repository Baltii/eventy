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
      description: 'Lorem Ipsum',
      image:
        'https://cdn.socio.events/spai/q_glossy+w_966+to_avif+ret_img/socio.events/wp-content/uploads/2022/10/AdobeStock_503243650-2048x1184.jpeg',
    },
    {
      title: 'Hackathon 2024',
      date: this.getCurrentDate(),
      description: 'Lorem Ipsum',
      image:
        'https://cdn.socio.events/spai/q_glossy+w_966+to_avif+ret_img/socio.events/wp-content/uploads/2022/10/AdobeStock_503243650-2048x1184.jpeg',
    },
    {
      title: 'Hackathon 2024',
      date: this.getCurrentDate(),
      description: 'Lorem Ipsum',
      image:
        'https://cdn.socio.events/spai/q_glossy+w_966+to_avif+ret_img/socio.events/wp-content/uploads/2022/10/AdobeStock_503243650-2048x1184.jpeg',
    },
    {
      title: 'Hackathon 2024',
      date: this.getCurrentDate(),
      description: 'Lorem Ipsum',
      image:
        'https://cdn.socio.events/spai/q_glossy+w_966+to_avif+ret_img/socio.events/wp-content/uploads/2022/10/AdobeStock_503243650-2048x1184.jpeg',
    },
    {
      title: 'Hackathon 2024',
      date: this.getCurrentDate(),
      description: 'Lorem Ipsum',
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
