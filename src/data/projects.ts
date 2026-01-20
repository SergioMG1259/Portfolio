import type { ImageMetadata } from "astro";
import lunaCover from '../assets/images/AVH1.png';

export interface Tool {
  name: string;
  description: string;
  iconUrl: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  imageUrl: string;
}

export interface CoverImage {
    url: ImageMetadata;
    alt: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tools: Tool[];
  links: ProjectLink[];
  coverImage: CoverImage;
}

export const projects: Project[] = [
    {
        slug: 'luna',
        title: 'Luna',
        summary: 'My teammate and I created a holographic virtual assistant for children as our university final project. We used Blender for modeling and Unity for the mobile app. Voice processing involved OpenAI\'s Whisper for voice-to-text and GPT-4 for generating responses. ElevenLabs provided the assistant\'s voice narration, all managed through AWS Lambda functions.',
        tools: [
            {
                name: 'Python',
                description: 'Programming laguage',
                iconUrl: 'https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png'
            },
            {
                name: 'GPT-4',
                description: 'LLM',
                iconUrl: 'https://images.icon-icons.com/4252/PNG/512/chatgpt_logo_chatgpt_logo_square_green_gpt_ia_openai_icon_264977.png'
            },
            {
                name: 'Unity',
                description: 'Game Engine',
                iconUrl: 'https://images.icon-icons.com/4037/PNG/512/unity_brands_icon_256638.png'
            },
            {
                name: 'Blender',
                description: '3D Software',
                iconUrl: 'https://images.icon-icons.com/195/PNG/256/Blender_23505.png'
            },
            {
                name: 'AWS',
                description: 'Cloud Services',
                iconUrl: 'https://images.icon-icons.com/2407/PNG/512/aws_icon_146074.png'
            },
            {
                name: 'ElevenLabs',
                description: 'Text-to-Speech',
                iconUrl: 'https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/a2ea339b-8b5e-41bb-b706-24eda8a4c9e3/elevenlabs-symbol.svg'
            }
        ],
        links: [
            {
                label: 'Watch',
                url: 'https://www.youtube.com/watch?v=OxCELIKbKrE',
                imageUrl: 'https://images.icon-icons.com/195/PNG/256/YouTube_23392.png'
            },
            {
                label: 'Read Paper',
                url: 'https://doi.org/10.54808/CICIC2025.01.49',
                imageUrl: 'https://images.icon-icons.com/3720/PNG/512/paper_learning_school_study_education_book_icon_230386.png'
            }
        ],
        coverImage: {
            url: lunaCover,
            alt: 'Luna project image'
        }
    }
];