// Menu function
$('#x-menu').click(function () {
  $('#x-menu').toggleClass('active');
  $('#dp').toggleClass('active');
})

$('#dp').click(function () {
  location.href = './map.html'
})

$(document).ready(function () {
  let blogs = [
    {
      url: './images/1.png',
      title: 'Bojan Stefanovic Logoholik',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      url: './images/2.png',
      title: 'Double interview',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      url: './images/3.png',
      title: 'How we achieved a high level of employee satisfaction',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      url: './images/4.png',
      title: 'The Barbers',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      url: './images/5.png',
      title: 'How to Find an Agency That Builds Satisfaction',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      url: './images/6.png',
      title: 'Discovery phase',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]

  blogs.map(blog => {
    // rendering with javascript (more readable)

    // let story = 
    // '<div class="col-xs-12 col-md-6 col-lg-6 story">' +
    //   '<div class="story-thumbnail_wrapper">' +
    //     '<img src=' + blog.url + " " + 'alt="Story thumbnail" class="story-thumbnail" />' +
    //   '</div>' +
    //   '<div class="story-body">' +
    //     '<p class="story-separator"></p>' +
    //     '<p class="story-title">' + blog.title + '</p>' +
    //     '<p class="story-content">' + blog.content + '</p>' +
    //   '</div>' +
    // '</div>';

    // rendering with jQuery

    let story = $('<div>', {
      class: 'col-xs-12 col-md-6 col-lg-6 story'
    })

    let thumbnailWrapper = $('<div>', {
      class: 'story-thumbnail_wrapper',
    }).append(
      $('<img>', {
        class: 'story-thumbnail',
        alt: 'Story thumbnail',
        src: blog.url,
      }));

    let storyBodyWrapper = $('<div>', {
      class: 'story-body',
    }).append(
      $('<p>', {
        class: 'story-separator',
      }),
      $('<p>', {
        class: 'story-title',
      }).text(blog.title),
      $('<p>', {
        class: 'story-content',
      }).text(blog.content)
    )

    $(story).append(thumbnailWrapper, storyBodyWrapper);

    $('.row').append(story)
  })
})