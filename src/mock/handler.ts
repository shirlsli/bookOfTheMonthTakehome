import { http, HttpResponse } from 'msw';
import { nanoid } from 'nanoid';

export const handler = [
  http.post('/api/checkout', async ({ request }) => {
    const failMode = new URL(window.location.href).searchParams.get('mockFail');
    if (failMode === 'server') {
      return HttpResponse.json({ error: 'Could not process request.' }, { status: 500 });
    }
    const { bookIds } = (await request.json()) as { bookIds?: number[] }; // unused currently since no backend code exists, but would be used in a real-life situation
    const orderId: string = nanoid(10);
    const estimatedShipDate = new Date();
    estimatedShipDate.setDate(estimatedShipDate.getDate() + 5);

    // if this wasn't mocked, the function would call some other function to take bookIds, orderId, and estimatedShipDate and save it as some sort of Order object in database
    return HttpResponse.json({
      orderId: orderId,
      estimatedShipDate: estimatedShipDate.toISOString().slice(0, 10)
    })
  }),
]