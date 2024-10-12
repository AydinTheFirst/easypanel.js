interface LicenseKey {
  id: number;
  status: string;
  key: string;
  activation_limit: number;
  activation_usage: number;
  created_at: string;
  expires_at: string | null;
  test_mode: boolean;
}

interface Instance {
  id: string;
  name: string;
  created_at: string;
}

interface Meta {
  store_id: number;
  order_id: number;
  order_item_id: number;
  variant_id: number;
  variant_name: string;
  product_id: number;
  product_name: string;
  customer_id: number;
  customer_name: string;
  customer_email: string;
}

export interface GetLemonLicensePayloadResponse {
  valid: boolean;
  error: string | null;
  license_key: LicenseKey;
  instance: Instance;
  meta: Meta;
}

export interface ActivateByOrderResponse {}

export interface ActivateLemonLicenseResponse {}

export interface DeactivateLemonLicenseResponse {}
