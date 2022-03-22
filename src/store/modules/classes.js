import class1img from '@/assets/images/placeholders/classes/class-1.png';
import class2img from '@/assets/images/placeholders/classes/class-2.png';
import class3img from '@/assets/images/placeholders/classes/class-3.png';
import class4img from '@/assets/images/placeholders/classes/class-4.png';
import class5img from '@/assets/images/placeholders/classes/class-5.png';
import class6img from '@/assets/images/placeholders/classes/class-6.png';
import instructor1img from '@/assets/images/placeholders/instructor-1.jpg';

const state = {
  classes: [
    {
      id: 'DenUCtWH89',
      image: class1img,
      category: 'Teen',
      type: 'onsite',
      name: 'Teen Inspiration Series',
      code: 'A21.22.WI',
      instructor: { name: 'Maliha Masood' },
      schedule: 'Tuesdays or Thursdays | 4:00 PM - 6:00 PM PST',
      location: 'Print Studio, Kirkland Arts Center',
      level: 'All Levels',
      price: {
        main: 250,
      },
      sessions: [
        {
          name: `Picasso Style Cubism Self Portrait (Tues)`,
          date: 'Thursday, 1/11/2022',
          rate: 25,
          selected: false,
        },
        {
          name: `Picasso Style Cubism Self Portrait (Thurs)`,
          date: 'Thursday, 1/11/2022',
          rate: 25,
          selected: false,
        },
        {
          name: `Matisse Abstract Cutout Collage (Tues)`,
          date: 'Thursday, 1/11/2022',
          rate: 25,
          selected: false,
        },
        {
          name: `Matisse Abstract Cutout Collage (Thurs)`,
          date: 'Thursday, 1/11/2022',
          rate: 25,
          selected: false,
        },
        {
          name: `Paul Klee One Line Drawing (Tues)`,
          date: 'Thursday, 1/11/2022',
          rate: 25,
          selected: false,
        },
        {
          name: `Paul Klee One Line Drawing (Thurs)`,
          date: 'Thursday, 1/11/2022',
          rate: 25,
          selected: false,
        },
        {
          name: `Hokusai Japanese Perspective Sketch (Tues)`,
          date: 'Thursday, 1/11/2022',
          rate: 25,
          selected: false,
        },
        {
          name: `Hokusai Japanese Perspective Sketch (Thurs)`,
          date: 'Thursday, 1/11/2022',
          rate: 25,
          selected: false,
        },
        {
          name: `Seurat French Pointillism Dot Paintings (Tues)`,
          date: 'Thursday, 1/11/2022',
          rate: 25,
          selected: false,
        },
        {
          name: `Seurat French Pointillism Dot Paintings (Thurs)`,
          date: 'Thursday, 1/11/2022',
          rate: 25,
          selected: false,
        },
      ],
    },
    {
      id: 'hHwMWJ0fxh',
      image: class2img,
      category: 'Youth',
      type: 'onsite',
      name: 'Draw, Paint, & Print, Ages 5-10',
      code: 'A21.22.WI',
      instructor: { name: 'Carl Clausen' },
      schedule: 'Saturdays | 9:30 AM - 11:00 AM PST | 1/22/2022 - 3/12/2022',
      location: 'Skylight Studio, Kirkland Arts Center',
      level: 'All Levels',
      price: {
        main: 240,
        members: 216,
      },
      inCart: false,
    },
    {
      id: 'GD6CdyRNRP',
      image: class3img,
      category: 'Youth',
      type: 'onsite',
      name: 'Family Art Studio, Ages 2-4 with an adult',
      code: 'B11.15.ST',
      instructor: { name: 'Shannon Hopkins' },
      schedule: 'Mondays | 10:00 AM - 11:00 AM PST | 1/10/2022 - 3/7/2022',
      location: 'Mezzanine Studio, Kirkland Arts Center',
      level: 'All Levels',
      price: {
        main: 200,
        members: 180,
      },
      inCart: false,
    },
    {
      id: 'VIAFPupaWb',
      image: class4img,
      category: '2D',
      type: 'online',
      name: 'Abstract Painting',
      code: 'A21.22.WI',
      instructor: { name: 'Soo Hong' },
      schedule: 'Mondays | 10:00 AM - 1:00 PM PST | 1/24/2022 - 3/7/2022',
      location: 'Skylight Studio, Kirkland Arts Center',
      level: 'Intermediate to Advanced',
      price: {
        main: 250,
        members: 225,
      },
      inCart: false,
    },
    {
      id: 'gjKqNYiDKz',
      image: class5img,
      category: '2D',
      type: 'onsite',
      name: 'Acrylic Landscape Painting',
      code: 'B11.15.ST',
      instructor: { name: 'Sharon Maughan' },
      schedule: 'Mondays | 6:00 PM - 9:00 PM PST | 1/10/2022 - 3/14/2022',
      location: 'Mezzanine Studio, Kirkland Arts Center',
      level: 'Beginning, Intermediate',
      price: {
        main: 200,
        members: 180,
      },
      inCart: false,
    },
    {
      id: 'zgugkQhGPG',
      image: class6img,
      category: 'Youth',
      type: 'online',
      name: 'Fun with Form and Color in Abstraction',
      code: 'A21.22.WI',
      instructor: { name: 'Amy Scherer' },
      schedule: 'Tuesdays | 2:00 PM - 5:00 PM PST | 1/18/2022 - 3/8/2022',
      location: 'Skylight Studio, Kirkland Arts Center',
      level: 'All Levels',
      price: {
        main: 335,
        members: 301.05,
      },
      inCart: false,
    },
  ],

  classDetails: {
    programDescription: `Abstraction class will be experimental in concept and artists using any type of medium including drawings, collage, paintings and mix-media. It will be based on self-paced production process, meaning each participant will start and progress in her/his own stage. Instructor will also prepare creative exercise assignments to work on who needs guidance and new into abstract art. You are welcome to bring your own projects to focus in depth in this class. The instructor will support each participant’s need and discuss his/her artworks together to share and understand diverse thoughts. It will run in a creative and cooperative environment.`,
    instructors: [
      {
        image: instructor1img,
        name: 'Soo Hong',
        descriptions: [
          `The canvases of Soo Hong conjure an atmospheric and dreamlike terrain based on nomadic early childhood, which she evokes without illustrating specific details. The Seattle based artist creates layered compositions based subject matter from her daily life : dreams, places and past experiences. She works by using charcoal on paper and collage images on canvas. She fills in the works with paint and by doing so, draws out the energetic relationships and creates a landscape between the charcoal images. “Painting is a place where I could understand.” Hong has said of her work.`,
          `Soo Hong is an artist and an illustrator graduated from Central Saint Martins College of Art and Design in London. Currently she lives in Bellevue with her family. She was an university lecturer, guest speaker and have been teaching from teenagers to adults in her private studio. Her artworks were exhibited in New York, London, Copenhagen, Rotterdam, Seoul, Tokyo, Shanghai and Hong Kong. She is excited to teach and meet talents at KAC this year.`,
        ],
      },
    ],
    specialNotes: [
      `*NO CLASS ON 2/21/22.*`,
      `**In compliance with the recent King County mandate, Kirkland Arts Center will require proof of vaccination for onsite teaching artists, staff, and students over age 12, beginning October 26th, 2021.** Please email health@kirklandartscenter.org with any questions or concerns.`,
    ],
    requiredSupplies: {
      supplyList: [
        {
          heading: `Acrylic`,
          items: [
            `acrylic (Heavy body, Fluid, High flow- your own selection)`,
            `Golden (Professional), Amsterdam(Student), Abstract Sennelier (Student)`,
            `brushes (Filbert, Flat variety sizes and house paint brush)`,
            `palette, paint knives, painting tools, spray bottle`,
            `canvas, Wood panel or canvas paper`,
            `2 Water buckets, rags or paper towel`,
          ],
        },
        {
          heading: `Oil`,
          items: [
            `oil paints (Traditional, Water mixable, Alkyd)`,
            `linseed oil, gamsol`,
            `mediums (Low viscosity Galkyd lite, Impasto: Galkyd gel)- Both fast dry`,
            `canvas, wood panel or board`,
            `palette, brushes, pain knives, painting tools, rags or paper towel`,
          ],
        },
        {
          heading: `Collage`,
          items: [
            `magazines, newspaper, variety of papers, photographs, stamps (ephemera)`,
            `adhesive (Golden matte medium, Yes paste, Elmers or glue stick)`,
            `scissors, X-Acto knife (cutter or utility knife), cutting mat`,
            `canvas, wood panel or board`,
          ],
        },
        {
          heading: `Watercolor`,
          items: [
            `watercolor (Daniel smith or Shinhan)`,
            `brushes (Hwahong watercolor round brush set, Wide Hake brush, Squirrel brush-option)`,
            `Watercolor papers (140 lbs: Hot or Cold-press) or others your choice`,
            `2 water buckets, paper towel`,
          ],
        },
        {
          heading: `Drawing`,
          items: [
            `graphite, charcoal, conte, oil stick`,
            `ink (Chinese, Indian, walnut)`,
            `pastel (soft, hard and oil) , color pencil`,
          ],
        },
      ],
      onlineStores: [
        {
          url: 'https://www.amazon.com',
          text: 'www.amazon.com',
        },
        {
          url: 'https://www.dickblick.com',
          text: 'www.dickblick.com',
        },
        {
          url: 'https://www.cheapjoes.com',
          text: 'www.cheapjoes.com',
        },
        {
          url: 'https://www.jerrysartarama.com',
          text: 'www.jerrysartarama.com',
        },
        {
          url: 'https://www.artistcraftsman.com',
          text: 'www.artistcraftsman.com',
        },
      ],
    },
  },
};

const mutations = {
  toggleToCart(state, classId) {
    state.classes.forEach((classBox) => {
      if (classBox.id === classId) {
        classBox.inCart = !classBox.inCart;
      }
    });
  },

  toggleSession(state, { classId, index }) {
    state.classes.forEach((classBox) => {
      if (classBox.id === classId) {
        classBox.sessions[index].selected = !classBox.sessions[index].selected;
      }
    });
  },

  toggleAllSessions(state, { classId, value }) {
    state.classes.forEach((classBox) => {
      if (classBox.id === classId) {
        classBox.sessions.forEach((session) => (session.selected = value));
      }
    });
  },
};

const getters = {
  inCartClasses(state) {
    return state.classes.filter((classBox) => classBox.inCart);
  },
};

export default { namespaced: true, state, mutations, getters };
