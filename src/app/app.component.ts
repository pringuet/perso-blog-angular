import { Component } from '@angular/core';
import { Post } from './types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corporis suscipit repudiandae tempora harum cupiditate, eveniet temporibus mollitia id expedita deleniti ad atque sunt, voluptates tempore laboriosam voluptas maiores velit!',
      loveIts: 0,
      created_at: new Date('11/01/1965 13:50')
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem vero quo a quasi harum, perspiciatis quibusdam nemo hic, sint nostrum deleniti eligendi tenetur earum. Quibusdam placeat molestiae alias tempore.',
      loveIts: 0,
      created_at: new Date('10/17/2020 08:32')
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, quo ad distinctio dignissimos optio asperiores alias officiis. Ratione quasi incidunt natus qui, recusandae quia perspiciatis possimus obcaecati animi fugit. Deserunt?',
      loveIts: 0,
      created_at: new Date('03/03/2019 17:37')
    }
  ];
}
