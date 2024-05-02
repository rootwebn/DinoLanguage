import { NextResponse } from 'next/server';
interface valueFormInt {
  userAnswer: string;
  translated: { translatedWords: string[] };
  valueForm: {};
  wordIndex: number;
}
export async function POST(request: Request) {
  const dataAnswer: { answer: boolean } = {
    answer: false,
  };
  const {
    valueForm,
    userAnswer,
    translated,
    wordIndex,
  }: Partial<valueFormInt> = await request.json();

  if (
    !valueForm ||
    !translated ||
    !wordIndex ||
    typeof wordIndex !== 'number'
  ) {
    return NextResponse.json({ message: 'Missing required data!' });
  } else {
    if (valueForm === translated.translatedWords[wordIndex]) {
      dataAnswer.answer = true;
      return NextResponse.json({
        data: dataAnswer,
      });
    } else {
      return NextResponse.json({
        message: 'Request is ok, but with no data response !',
      });
    }
  }
}
//!valueForm || !userAnswer ||
