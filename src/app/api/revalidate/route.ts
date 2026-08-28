import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = { _type?: string };

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 }
      );
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    revalidateTag(body._type, "max");

    return NextResponse.json({ revalidated: true, type: body._type });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
