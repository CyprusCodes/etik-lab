export type LeadFormType =
  | "contact"
  | "appointment"
  | "test_request"
  | "service_contact";

type LeadSuccessEvent = {
  event: "etik_lead_success";
  form_type: LeadFormType;
};

/** Tracking must never affect a successfully submitted form. */
export function trackLeadSuccess(formType: LeadFormType): void {
  try {
    if (typeof window === "undefined") return;

    const trackingWindow = window as Window & {
      dataLayer?: { push: (event: LeadSuccessEvent) => unknown };
    };
    trackingWindow.dataLayer = trackingWindow.dataLayer || [];
    trackingWindow.dataLayer.push({
      event: "etik_lead_success",
      form_type: formType,
    });
  } catch {
    // A blocked or unavailable tag manager must not interrupt form success.
  }
}
