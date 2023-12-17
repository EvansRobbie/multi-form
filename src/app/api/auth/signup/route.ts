export const POST = async (req: Request, res: Response) => {
  const data = await req.json();
  console.log(data);
};
